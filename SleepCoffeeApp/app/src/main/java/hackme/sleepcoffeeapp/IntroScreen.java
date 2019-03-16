package hackme.sleepcoffeeapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Spinner;

public class IntroScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_intro_screen);

        Intent menu = new Intent(this, MainMenu.class);
        String baseInfo = getPreferences(MODE_PRIVATE).getString("weight", "");
        if(!baseInfo.equals("")) {
            startActivity(menu);
        }
    }

    public void OnWeightEnter(View v) {
        EditText weightField = (EditText) findViewById(R.id.EnterWeight);
        int weight = Integer.parseInt(weightField.getText().toString());
        SharedPreferences prefs = getPreferences(MODE_PRIVATE);
        SharedPreferences.Editor prefsEditor = prefs.edit();
        prefsEditor.putInt("weight", weight);

        EditText ageField = (EditText) findViewById(R.id.yearOfBirth);
        int age = Integer.parseInt(ageField.getText().toString());
        prefsEditor.putInt("age", age);

        prefsEditor.commit();
        Intent menu = new Intent(this, MainMenu.class);
        startActivity(menu);
    }
}
