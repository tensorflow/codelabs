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
    // TODO: create REST request
    return null;
  }

  private Predict.PredictRequest createGRPCRequest() {
    // TODO: create gRPC request
    return null;
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
              // TODO: send REST request to TensorFlow Serving
            } else {
              // TODO: send gRPC request to TensorFlow Serving
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
  // TODO: postprocess gRPC response and render UI
  }

  private void postprocessRESTResponse(JSONObject responseObject) throws JSONException {
    // TODO: postprocess REST response and render UI
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
