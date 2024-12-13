@file:Suppress("UNUSED_EXPRESSION")

import com.android.build.api.dsl.Packaging

plugins {
    alias(libs.plugins.android.application)
}

android {
    namespace = "com.crackyOS.msg"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.crackyOS.msg"
        minSdk = 26
        targetSdk = 34
        versionCode = 1
        versionName = "5.4.1"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }

    packaging {
        resources.excludes.add("assets/com.crackyOS.msg/src/fonts/Bebas_Neue/OFL.txt");
        resources.excludes.add("assets/com.crackyOS.msg/src/fonts/M_PLUS_Rounded_1c/OFL.txt");
        resources.excludes.add("assets/com.crackyOS.msg/src/fonts/Playwrite_AT/OFL.txt");
        resources.excludes.add("assets/com.crackyOS.msg/src/fonts/Share_Tech_Mono/OFL.txt");
        resources.excludes.add("assets/com.crackyOS.msg/count_lines.py");
    }
}

dependencies {
    implementation(libs.appcompat)
    implementation(libs.material)
    implementation(libs.activity)
    implementation(libs.constraintlayout)
    testImplementation(libs.junit)
    androidTestImplementation(libs.ext.junit)
    androidTestImplementation(libs.espresso.core)
}