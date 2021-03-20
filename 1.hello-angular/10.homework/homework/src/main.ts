import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

class Poem {
  public poemLine: string;
  public nameWithAuthor: string;
  public hide: boolean;

  constructor(poemLine: string, nameWithAuthor: string) {
    this.poemLine = poemLine;
    this.nameWithAuthor = nameWithAuthor;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: "poem",
  template: `
    <div class="card card-block">
      <h4 class="card-title">{{ data.poemLine }}</h4>
      <p class="card-text" [hidden]="data.hide">{{ data.nameWithAuthor }}</p>
      <a (click)="data.toggle()" class="btn btn-warning">告诉我 </a>
      <a class="btn btn-danger">删除</a>
    </div>
  `,
})
class PoemComponent {
  @Input("poem") data: Poem;
}

@Component({
  selector: "poem-form",
  template: `
    <div class="card card-block">
      <h4 class="card-title">创建诗歌</h4>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="输入诗句"
          #poemLine
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="输入诗名和作者信息"
          #nameWithAuthor
        />
      </div>
      <button
        type="button"
        class="btn btn-primary"
        (click)="createPoem(poemLine.value, nameWithAuthor.value)"
      >
        创建
      </button>
    </div>
  `,
})
class PoemFormComponent {
  @Output() poemCreated = new EventEmitter<Poem>();

  createPoem(poemLine: string, nameWithAuthor: string) {
    this.poemCreated.emit(new Poem(poemLine, nameWithAuthor));
  }
}

@Component({
  selector: "poem-list",
  template: `
    <poem-form (poemCreated)="addPoem($event)"></poem-form>
    <poem *ngFor="let p of poems" [poem]="p"></poem>
  `,
})
class PoemListComponent {
  poems: Poem[]; // Array<Object>

  constructor() {
    this.poems = [
      new Poem(
        "好雨知时节，当春乃发生，随风潜入夜，润物细无声。",
        "春夜喜雨(杜甫)"
      ),
      new Poem(
        "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
        "静夜思(李白)"
      ),
      new Poem(
        "月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。",
        "枫桥夜泊(张继)"
      ),
    ];
  }

  addPoem(poem) {
    this.poems.unshift(poem);
  }

  /**
   * TODO
   *
   * 当用户点击删除按钮时，调用该函数，从数组中将诗歌删除。
   */
  deletePoem(poem) {
    let indexToDelete = this.poems.indexOf(poem);
    if (indexToDelete !== -1) {
      this.poems.splice(indexToDelete, 1);
    }
  }
}

@Component({
  selector: "app",
  template: ` <poem-list></poem-list> `,
})
class AppComponent {}

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PoemComponent,
    PoemListComponent,
    PoemFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
