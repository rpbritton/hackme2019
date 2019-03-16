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
        Intent CoffeeForSleep = new Intent(this, CoffeeForSleep.class);
        startActivity(CoffeeForSleep);
    }

    public void OnClickEnterCoffee(View v) {
        Intent EnterCoffee = new Intent(this, EnterCoffee.class);
        startActivity(EnterCoffee);
    }

    public void OnClickTillSleep(View v) {
        Intent TimeTillSleep = new Intent(this, TimeTillSleep.class);
        startActivity(TimeTillSleep);
    }

    public void OnClickSignIn(View v) {
        Intent SignIn = new Intent(this, SignIn.class);
        startActivity(SignIn);
    }

}
