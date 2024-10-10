<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('question_code_outputs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('question_id');
            $table->longText('output')->nullable();
            $table->longText('correct_output');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('question_code_outputs');
    }
};
