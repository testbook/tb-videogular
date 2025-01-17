import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";

export interface IVgDemo {
  label: string;
  src: string;
}

@Component({
  selector: "tb-videogular-root",
  templateUrl: "./app.component.html",
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = "tb-videogular";

  currentDemo: SafeResourceUrl;
  selectedDemo: IVgDemo;
  isDemoEnabled = false;

  demos: IVgDemo[] = [
    {
      label: "Picture-in-Picture",
      src: "https://testbook.github.io/tb-videogular-showroom/#/master-player?standalone=true",
    },
    {
      label: "Cue points",
      src: "https://testbook.github.io/tb-videogular-showroom/#/cue-points-player?standalone=true",
    },
    {
      label: "Play Anything",
      src: "https://testbook.github.io/tb-videogular-showroom/#/custom-media?standalone=true",
    },
    {
      label: "Advertisement",
      src: "https://testbook.github.io/tb-videogular-showroom/#/google-ima-player?standalone=true",
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.updateDemo(this.demos[0]);
  }

  updateDemo(demo: IVgDemo) {
    this.currentDemo = this.sanitizer.bypassSecurityTrustResourceUrl(demo.src);
    this.selectedDemo = demo;
  }
}
