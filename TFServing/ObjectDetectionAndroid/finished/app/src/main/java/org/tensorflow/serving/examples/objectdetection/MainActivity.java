// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package org.tensorflow.serving.examples.objectdetection;

import static android.graphics.Color.GREEN;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.os.Bundle;
import android.os.StrictMode;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.RadioGroup;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import com.google.protobuf.Int64Value;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.tensorflow.framework.DataType;
import org.tensorflow.framework.TensorProto;
import org.tensorflow.framework.TensorShapeProto;
import tensorflow.serving.Model;
import tensorflow.serving.Predict;
import tensorflow.serving.PredictionServiceGrpc;

/** The main activity to provide interactions with users. */
public class MainActivity extends AppCompatActivity {

  static final String TAG = "TFServingDemo";
  static final int INPUT_IMG_HEIGHT = 360;
  static final int INPUT_IMG_WIDTH = 249;
  static final String TEST_IMG_NAME = "cat.jpg";

  // This is for Android Emulator
  static final String SERVER = "10.0.2.2";
  static final int GRPC_PORT = 8500;
  static final int REST_PORT = 8501;
  static final String MODEL_NAME = "ssd_mobilenet_v2_2";
  static final long MODEL_VERSION = 123;
  static final String SIGNATURE_NAME = "serving_default";

  static final MediaType JSON = MediaType.get("application/json; charset=utf-8");
  private OkHttpClient client;

  private ManagedChannel channel;
  private PredictionServiceGrpc.PredictionServiceBlockingStub stub;

  private Button predictButton;
  private Button clearButton;
  private TextView responseTextView;
  private ImageView inputImageView;
  private Bitmap inputImgBitmap;
  private RadioGroup requestRadioGroup;

  private Request createRESTRequest() {
    int[] inputImg = new int[INPUT_IMG_HEIGHT * INPUT_IMG_WIDTH];
    int[][][][] inputImgRGB = new int[1][INPUT_IMG_HEIGHT][INPUT_IMG_WIDTH][3];
    inputImgBitmap.getPixels(inputImg, 0, INPUT_IMG_WIDTH, 0, 0, INPUT_IMG_WIDTH, INPUT_IMG_HEIGHT);
    int pixel;
    for (int i = 0; i < INPUT_IMG_HEIGHT; i++) {
      for (int j = 0; j < INPUT_IMG_WIDTH; j++) {
        // Extract RBG values from each pixel; alpha is ignored
        pixel = inputImg[i * INPUT_IMG_WIDTH + j];
        inputImgRGB[0][i][j][0] = ((pixel >> 16) & 0xff);
        inputImgRGB[0][i][j][1] = ((pixel >> 8) & 0xff);
        inputImgRGB[0][i][j][2] = ((pixel) & 0xff);
      }
    }

    RequestBody requestBody =
        RequestBody.create("{\"instances\": " + Arrays.deepToString(inputImgRGB) + "}", JSON);

    Request request =
        new Request.Builder()
            .url("http://" + SERVER + ":" + REST_PORT + "/v1/models/" + MODEL_NAME + ":predict")
            .post(requestBody)
            .build();

    return request;
  }

  private Predict.PredictRequest createGRPCRequest() {
    if (stub == null) {
      channel = ManagedChannelBuilder.forAddress(SERVER, GRPC_PORT).usePlaintext().build();
      stub = PredictionServiceGrpc.newBlockingStub(channel);
    }

    Model.ModelSpec.Builder modelSpecBuilder = Model.ModelSpec.newBuilder();
    modelSpecBuilder.setName(MODEL_NAME);
    modelSpecBuilder.setVersion(Int64Value.of(MODEL_VERSION));
    modelSpecBuilder.setSignatureName(SIGNATURE_NAME);

    Predict.PredictRequest.Builder builder = Predict.PredictRequest.newBuilder();
    builder.setModelSpec(modelSpecBuilder);

    TensorProto.Builder tensorProtoBuilder = TensorProto.newBuilder();
    tensorProtoBuilder.setDtype(DataType.DT_UINT8);
    TensorShapeProto.Builder tensorShapeBuilder = TensorShapeProto.newBuilder();
    tensorShapeBuilder.addDim(TensorShapeProto.Dim.newBuilder().setSize(1));
    tensorShapeBuilder.addDim(TensorShapeProto.Dim.newBuilder().setSize(INPUT_IMG_HEIGHT));
    tensorShapeBuilder.addDim(TensorShapeProto.Dim.newBuilder().setSize(INPUT_IMG_WIDTH));
    tensorShapeBuilder.addDim(TensorShapeProto.Dim.newBuilder().setSize(3));
    tensorProtoBuilder.setTensorShape(tensorShapeBuilder.build());
    int[] inputImg = new int[INPUT_IMG_HEIGHT * INPUT_IMG_WIDTH];
    inputImgBitmap.getPixels(inputImg, 0, INPUT_IMG_WIDTH, 0, 0, INPUT_IMG_WIDTH, INPUT_IMG_HEIGHT);
    int pixel;
    for (int i = 0; i < INPUT_IMG_HEIGHT; i++) {
      for (int j = 0; j < INPUT_IMG_WIDTH; j++) {
        // Extract RBG values from each pixel; alpha is ignored
        pixel = inputImg[i * INPUT_IMG_WIDTH + j];
        tensorProtoBuilder.addIntVal((pixel >> 16) & 0xff);
        tensorProtoBuilder.addIntVal((pixel >> 8) & 0xff);
        tensorProtoBuilder.addIntVal((pixel) & 0xff);
      }
    }
    TensorProto tensorProto = tensorProtoBuilder.build();

    builder.putInputs("input_tensor", tensorProto);

    builder.addOutputFilter("num_detections");
    builder.addOutputFilter("detection_boxes");
    builder.addOutputFilter("detection_classes");
    builder.addOutputFilter("detection_scores");

    return builder.build();
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    if (android.os.Build.VERSION.SDK_INT > 9) {
      StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
      StrictMode.setThreadPolicy(policy);
    }

    predictButton = findViewById(R.id.predict_button);
    clearButton = findViewById(R.id.clear_button);
    responseTextView = findViewById(R.id.response_tv);
    inputImageView = findViewById(R.id.input_iv);
    requestRadioGroup = findViewById(R.id.request_rg);

    // Read input image
    InputStream inputStream = null;
    try {
      inputStream = getAssets().open(TEST_IMG_NAME);
    } catch (IOException e) {
      Log.e(TAG, e.getMessage());
      return;
    }
    inputImgBitmap = BitmapFactory.decodeStream(inputStream);
    inputImageView.setImageBitmap(inputImgBitmap);

    predictButton.setOnClickListener(
        new View.OnClickListener() {
          @Override
          public void onClick(View view) {
            if (requestRadioGroup.getCheckedRadioButtonId() == R.id.rest) {
              Request request = createRESTRequest();
              try {
                client =
                    new OkHttpClient.Builder()
                        .connectTimeout(20, TimeUnit.SECONDS)
                        .writeTimeout(20, TimeUnit.SECONDS)
                        .readTimeout(20, TimeUnit.SECONDS)
                        .callTimeout(20, TimeUnit.SECONDS)
                        .build();
                Response response = client.newCall(request).execute();
                JSONObject responseObject = new JSONObject(response.body().string());
                postprocessRESTResponse(responseObject);
              } catch (IOException | JSONException e) {
                Log.e(TAG, e.getMessage());
                responseTextView.setText(e.getMessage());
                return;
              }
            } else {
              try {
                Predict.PredictRequest request = createGRPCRequest();
                Predict.PredictResponse response = stub.predict(request);
                postprocessGRPCResponse(response);
              } catch (Exception e) {
                Log.e(TAG, e.getMessage());
                responseTextView.setText(e.getMessage());
                return;
              }
            }
          }
        });

    clearButton.setOnClickListener(
        new View.OnClickListener() {
          @Override
          public void onClick(View view) {
            inputImageView.setImageBitmap(inputImgBitmap);
            responseTextView.setText("Tap 'Run inference' to run");
          }
        });
  }

  private void postprocessGRPCResponse(Predict.PredictResponse response) {
    float numDetections = response.getOutputsMap().get("num_detections").getFloatValList().get(0);
    List<Float> detectionScores =
        response.getOutputsMap().get("detection_scores").getFloatValList();
    int maxIndex = 0;
    for (int j = 0; j < numDetections; j++) {
      maxIndex = detectionScores.get(j) > detectionScores.get(maxIndex + 1) ? j : maxIndex;
    }
    Float detectionClass =
        response.getOutputsMap().get("detection_classes").getFloatValList().get(maxIndex);
    List<Float> boundingBoxValues =
        response.getOutputsMap().get("detection_boxes").getFloatValList();
    float ymin = boundingBoxValues.get(maxIndex * 4);
    float xmin = boundingBoxValues.get(maxIndex * 4 + 1);
    float ymax = boundingBoxValues.get(maxIndex * 4 + 2);
    float xmax = boundingBoxValues.get(maxIndex * 4 + 3);
    displayResult(detectionClass.intValue(), ymin, xmin, ymax, xmax);
  }

  private void postprocessRESTResponse(JSONObject responseObject) throws JSONException {
    JSONArray predictionsArray = responseObject.getJSONArray("predictions");
    // We are sending only one image, so we just directly extract the first element
    JSONObject predictions = predictionsArray.getJSONObject(0);
    // Argmax
    int maxIndex = 0;
    JSONArray detectionScores = predictions.getJSONArray("detection_scores");
    for (int j = 0; j < predictions.getInt("num_detections"); j++) {
      maxIndex =
          detectionScores.getDouble(j) > detectionScores.getDouble(maxIndex + 1) ? j : maxIndex;
    }
    int detectionClass = predictions.getJSONArray("detection_classes").getInt(maxIndex);
    JSONArray boundingBox = predictions.getJSONArray("detection_boxes").getJSONArray(maxIndex);
    double ymin = boundingBox.getDouble(0);
    double xmin = boundingBox.getDouble(1);
    double ymax = boundingBox.getDouble(2);
    double xmax = boundingBox.getDouble(3);
    displayResult(detectionClass, (float) ymin, (float) xmin, (float) ymax, (float) xmax);
  }

  private void displayResult(int detectionClass, float ymin, float xmin, float ymax, float xmax) {
    float left = xmin * INPUT_IMG_WIDTH;
    float right = xmax * INPUT_IMG_WIDTH;
    float top = ymin * INPUT_IMG_HEIGHT;
    float bottom = ymax * INPUT_IMG_HEIGHT;
    // Draw bounding box
    Bitmap resultInputBitmap = inputImgBitmap.copy(Bitmap.Config.ARGB_8888, true);
    Canvas canvas = new Canvas(resultInputBitmap);
    Paint paint = new Paint();
    paint.setStyle(Paint.Style.STROKE);
    paint.setStrokeWidth(5);
    paint.setColor(GREEN);
    canvas.drawRect(left, top, right, bottom, paint);
    inputImageView.setImageBitmap(resultInputBitmap);
    responseTextView.setText("Predicted class: " + String.valueOf(detectionClass));
  }
}
