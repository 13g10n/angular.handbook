import { Component, OnInit } from '@angular/core';
import { Manual } from '../../_models/manual';
import { Topic } from '../../_models/topic';
import {ManualService} from '../../_services/manual.service';
import {Step} from "../../_models/step";

type LookupFn<T, U> = (query: string, initial?: U) => Promise<T> | Promise<T[]>;

@Component({
  selector: 'app-manual-create',
  templateUrl: './manual-create.component.html',
  styleUrls: ['./manual-create.component.css']
})
export class ManualCreateComponent implements OnInit {

  manual: Manual = new Manual();
  selectedTopic: any;

  constructor(
    private manualService: ManualService
  ) {
    this.manual.steps = [];
  }

  ngOnInit() {
  }

  create() {
    this.manualService.searchTopic(this.selectedTopic).then(
      (data) => {
        this.manual.topic = data[0];
        this.manualService.create(this.manual).then(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addStep() {
    this.manual.steps.push(new Step());
  }

  lookupFn: LookupFn<Topic, string> = (query, initial?) => {
    if (initial !== undefined) {
      return this.manualService.getTopicList();
    }
    return this.manualService.searchTopic(query);
  }

}
