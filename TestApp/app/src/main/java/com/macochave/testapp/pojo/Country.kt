package com.macochave.testapp.pojo

import com.google.gson.annotations.SerializedName

data class Country(
    @SerializedName("pais") val pais: String,
    @SerializedName("nompais") val nomPais: String,
)
