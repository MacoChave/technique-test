package com.macochave.testapp.ui.department

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class DepartmentViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is department Fragment"
    }
    val text: LiveData<String> = _text
}