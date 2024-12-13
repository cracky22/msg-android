package com.crackyOS.msg;
import android.content.Context;
import android.os.Vibrator;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

public class WebAppInterface {
    private Context context;

    public WebAppInterface(Context context) {
        this.context = context;
    }

    @JavascriptInterface
    public void triggerVibration(int duration) {
        Vibrator vibrator = (Vibrator) context.getSystemService(Context.VIBRATOR_SERVICE);
        if (vibrator != null && vibrator.hasVibrator()) {
            vibrator.vibrate(duration);
        } else {
            Toast.makeText(context, "Haptisches Feedback nicht unterstützt", Toast.LENGTH_SHORT).show();
        }
    }
}
