package com.macochave.testapp.services

import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.FormUrlEncoded
import retrofit2.http.GET

const val BASE_URL = "https://localhost:5001/api/"

interface Api {
    @FormUrlEncoded
    @GET("person")
    fun getPerson()

    @FormUrlEncoded
    @GET("department")
    fun getDepartment()
}

object Service {
    val api: Api

    init {
        val retrofit = Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        api = retrofit.create(Api::class.java)
    }
}