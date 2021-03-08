import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: "poem-list",
  template: `
    <div class="card card-block" *ngFor="let poem of poems">
      <h4 class="card-title">{{ poem.poemLine }}</h4>
      <p class="card-text">{{ poem.nameWithAuthor }}</p>
    </div>
  `,
})
class PoemListComponent {
  poems: Object[]; // Array<Object>

  constructor() {
    this.poems = [
      {
        poemLine: "好雨知时节，当春乃发生，随风潜入夜，润物细无声。",
        nameWithAuthor: "春夜喜雨(杜甫)",
      },
      {
        poemLine: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
        nameWithAuthor: "静夜思(李白)",
      },
      {
        poemLine:
          "月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。",
        nameWithAuthor: "枫桥夜泊(张继)",
      },
    ];
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [PoemListComponent],
  bootstrap: [PoemListComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
