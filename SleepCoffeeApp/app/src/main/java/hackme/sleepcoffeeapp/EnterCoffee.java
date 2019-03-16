package hackme.sleepcoffeeapp;

import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;

import java.text.SimpleDateFormat;
import java.util.Date;

public class EnterCoffee extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_enter_coffee);
    }

    public void OnClickCaffeineContent() {
        EditText caffeineField = (EditText) findViewById(R.id.CaffeineContent);
        int content = Integer.parseInt(caffeineField.getText().toString());

        int timeUNIX = (int) (System.currentTimeMillis() / 1000.0);
        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date(System.currentTimeMillis());
        String timeFormat = formatter.format(date);

        SharedPreferences prefs = getPreferences(MODE_PRIVATE);
        String prefsNow = getPreferences(MODE_PRIVATE).getString(timeFormat, "");
        SharedPreferences.Editor prefsEditor = prefs.edit();
        prefsEditor.putString(timeFormat, prefsNow + timeUNIX + "," + content + "|");
    }
}