package hackme.sleepcoffeeapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainMenu extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_menu);
    }




    public void OnClickForSleep(View v) {
        Intent ForSleep = new Intent(this, CoffeeForSleep.class);
    }

    public void OnClickEnterCoffee(View v) {
        Intent ForSleep = new Intent(this, CoffeeForSleep.class);
    }

    public void OnClickTillSleep(View v) {
        Intent ForSleep = new Intent(this, CoffeeForSleep.class);
    }

    public void OnClickSignIn(View v) {
        Intent ForSleep = new Intent(this, CoffeeForSleep.class);
    }

}
