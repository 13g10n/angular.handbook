import {Component, OnDestroy, OnInit} from '@angular/core';
import {ManualService} from '../../_services/manual.service';
import {Manual} from '../../_models/manual';
import { ActivatedRoute } from '@angular/router';
import {AuthenticationService} from "../../_services/authentication.service";
import {LoadingService} from "../../_services/loading.service";
import {NotificationsService} from "angular2-notifications/dist";
import {TranslationService} from "../../_translations/translation.service";
import { Comment } from "../../_models/comment";
import {$WebSocket} from "angular2-websocket/angular2-websocket";
import {CommentsService} from "../../_services/comments.service";

@Component({
  selector: 'app-manual-details',
  templateUrl: './manual-details.component.html',
  styleUrls: ['./manual-details.component.css']
})
export class ManualDetailsComponent implements OnInit, OnDestroy {

  manual: Manual;
  rating = 0;

  newComment: Comment = new Comment();

  private sub: any;

  constructor(
    private manualService: ManualService,
    private route: ActivatedRoute,
    public authService: AuthenticationService,
    private loadingService: LoadingService,
    private notificationsService: NotificationsService,
    private translationService: TranslationService,
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.sub = this.route.params.subscribe(params => {
      this.manualService.getManual(+params['id'])
        .then(manual => {
          this.manual = manual;
          this.rating = manual.rating.average;
          this.commentsService.connect(this.manual.id);
          this.loadingService.end();
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ratingChange(value) {
    this.loadingService.start();
    this.manualService.rate(this.manual.id, value).then(
      (data) => {
        this.manual.rating.average = data['rating'];
        this.notificationsService.success(
          this.translationService.instant('Done!'),
          this.translationService.instant('You are voted this post!')
        );
        this.loadingService.end();
      },
      (err) => {
        this.notificationsService.error(
          this.translationService.instant('Error!'),
          this.translationService.instant('There are an error!')
        );
        this.loadingService.end();
      }
    );
  }

  addComment() {
    this.manualService.createComment(this.manual.id, this.newComment).then(
      (data) => {
        this.notificationsService.success(
          this.translationService.instant('Done!'),
          this.translationService.instant('Your comment was posted!')
        );
        this.loadingService.end();
      },
      (err) => {
        this.notificationsService.error(
          this.translationService.instant('Error!'),
          this.translationService.instant('There are an error!')
        );
        this.loadingService.end();
      }
    );
  }

}
