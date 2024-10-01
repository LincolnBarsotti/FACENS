package com.example.touristguidesorocaba;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class ZooPage extends AppCompatActivity {
    Button buttonVoltar;
    Button buttonSite;
    Button buttonMapa;
    Button buttonCall;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_zoo_page);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
        Button buttonVoltar = findViewById(R.id.buttonVoltar);
        Button buttonSite = findViewById(R.id.buttonSite);
        Button buttonMapa = findViewById(R.id.buttonMapa);
        Button buttonCall = findViewById(R.id.buttonCall);

        InteractionUx interaction = new InteractionUx();

        buttonSite.setOnClickListener(v -> {
            startActivity(interaction.getSite("https://facens.br"));
        });

        buttonMapa.setOnClickListener(v -> {
            startActivity(interaction.getNavigation("Rua+Teodoro+Kaisel+,+883"));
        });

        buttonCall.setOnClickListener(v->{
            startActivity(interaction.getCall("01511975958697"));
        });
    }

    public void onReload(View view) {
        try {
            finish();
        }
        catch(Throwable error) {
            Toast.makeText(this,error.getMessage(), Toast.LENGTH_LONG).show();
        }
    }
}