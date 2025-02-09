import { Component, OnInit } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{

  inputText: string = '';
  responseText: string = '';
  progress: boolean = false;
  private genAI: GoogleGenerativeAI;

  constructor() {
    this.genAI = new GoogleGenerativeAI('AIzaSyDwzjDf4jHrcISoV3sHFeR2D9DWmt_lP90');
  }

  ngOnInit(): void {}

  async generateText() {
    this.progress = true;
    this.responseText = '';
    try {
      const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(this.inputText);
      const response = await result.response;
      this.responseText = response.text();
      console.log('Response:', this.responseText);
    } catch (error) {
      console.error('Error generating text:', error);
    }
    this.progress = false;
  }


}
