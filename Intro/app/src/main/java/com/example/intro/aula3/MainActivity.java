package com.example.intro.aula3;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.example.intro.R;

public class MainActivity extends AppCompatActivity {

    private Apolice apolice;
    private Integer idade, numero;
    private Double valorAutomovel;
    private String nome;
    private char sexo;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main3);

        numero = Integer.parseInt(((TextView)findViewById(R.id.txtNumero)).getText().toString());
        idade = Integer.parseInt(((TextView)findViewById(R.id.txtIdade)).getText().toString());
        valorAutomovel = Double.parseDouble(((TextView)findViewById(R.id.txtValorAutomovel)).getText().toString());

        Spinner spinner = (Spinner) findViewById(R.id.spinner);
        String selectedItem = spinner.getSelectedItem().toString();
        sexo = selectedItem.charAt(0);

        apolice = new Apolice(numero, nome, idade, sexo, valorAutomovel);

        Button btnCalculate = findViewById(R.id.btnCalcu);
        btnCalculate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new AlertDialog.Builder(MainActivity.this)
                        .setTitle("Calculated Value")
                        .setMessage("The calculated value for the Apolice is: " + apolice.calcularValor())
                        .setPositiveButton(android.R.string.ok, null)
                        .show();
            }
        });

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }
}