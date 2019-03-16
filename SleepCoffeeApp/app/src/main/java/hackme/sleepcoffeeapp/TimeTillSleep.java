package hackme.sleepcoffeeapp;

import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeTillSleep extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_time_till_sleep);

        int timeUNIX = (int) (System.currentTimeMillis() / 1000.0);
        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date(System.currentTimeMillis());
        String timeFormat = formatter.format(date);

        int age = getPreferences(MODE_PRIVATE).getInt("age", 0);
        int weight = getPreferences(MODE_PRIVATE).getInt("weight", 0);
        String[] cups = getPreferences(MODE_PRIVATE).getString(timeFormat, "").split("|");

        String[][] cupsSplit = new String[cups.length-1][2];
        for(int i=0; i<cupsSplit.length-1; i++) {
            cupsSplit[i] = cups[i].split(",");
        }

        int strengthInBlood = 0;
        for(int i=0; i<cupsSplit.length; i++) {
            int timeSinceUNIX = timeUNIX - Integer.parseInt(cupsSplit[i][0]);
            double timeInHours = (double)(timeSinceUNIX) / 3600.0;

        }
    }


}
