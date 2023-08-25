package com.macochave.testapp.ui.country

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class CountryViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is country Fragment"
    }
    val text: LiveData<String> = _text
}