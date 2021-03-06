import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: "poem", // <poem></poem>
  template: `
    <h1>好雨知时节，当春乃发生，随风潜入夜，润物细无声。</h1>
    <p>春夜喜雨(杜甫)</p>
  `,
})
class PoemComponent {}

@NgModule({
  imports: [BrowserModule],
  declarations: [PoemComponent],
  bootstrap: [PoemComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
