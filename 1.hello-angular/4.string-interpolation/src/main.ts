import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: "poem", // <poem></poem>
  template: `
    <h1>{{ poemLine }}</h1>
    <p>{{ nameWithAuthor }}</p>
  `,
})
class PoemComponent {
  poemLine: string; // 诗句
  nameWithAuthor: string; // 诗名+作者

  constructor() {
    this.poemLine = "好雨知时节，当春乃发生，随风潜入夜，润物细无声。";
    this.nameWithAuthor = "春夜喜雨(杜甫)";
  }
}

// let poem = new PoemComponent();
// console.log(poem.poemLine);
// console.log(poem.nameWithAuthor);

@NgModule({
  imports: [BrowserModule],
  declarations: [PoemComponent],
  bootstrap: [PoemComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
