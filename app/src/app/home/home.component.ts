import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  videoUrl: string = 'assets/video_presentazione.mp4';
  @ViewChild('fullscreenVideo', { static: false }) videoElement: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  toggleFullScreen() {
    console.log('Toggle fullscreen function called');
    if (this.videoElement) {
      console.log('Video element found:', this.videoElement.nativeElement);

      const video = this.videoElement.nativeElement;
      console.log('Fullscreen supported:', video.requestFullscreen);

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      console.log('Video element not found');
    }
  }
}