package com.example.intro;

import android.app.AlertDialog;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class CalculadoraActivity extends AppCompatActivity {

    Button btnCal;
    Double resultado, num1, num2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_calculadora);

        Double num1 = Double.parseDouble(((TextView) findViewById(R.id.txtNum1)).getText().toString());
        Double num2 = Double.parseDouble(((TextView) findViewById(R.id.num2)).getText().toString());

        Double result = num1 + num2;

        btnCal = (Button)findViewById(R.id.btnCalc);
        btnCal.setOnClickListener(
                l -> {
                    AlertDialog.Builder builder = new AlertDialog.Builder(this);
                    builder.setTitle("Resultado da operação");
                    builder.setMessage("O resultado da operação:\n" + result);

                    // Botão OK para fechar o popup
                    builder.setPositiveButton("OK", (dialog, which) -> dialog.dismiss());

                    // Criar e exibir o popup
                    AlertDialog dialog = builder.create();
                    dialog.show();
                }
        );


        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }
}