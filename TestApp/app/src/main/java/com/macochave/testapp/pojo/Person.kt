package com.macochave.testapp.pojo

import com.google.gson.annotations.SerializedName

data class Person(
    @SerializedName("idpersona") val idPersona: Int,
    @SerializedName("nombre") val nombre: String,
    @SerializedName("pais") val pais: String,
    @SerializedName("departamento") val departamento: String,
    @SerializedName("direccion") val direccion: String,
)
