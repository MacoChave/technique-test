package com.macochave.testapp.pojo

import com.google.gson.annotations.SerializedName

data class Department(
    @SerializedName("pais") val pais: String,
    @SerializedName("depto") val depto: String,
    @SerializedName("nomdepto") val nomdepto: String,
)
