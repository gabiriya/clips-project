import { TabComponent } from './../tab/tab.component';
import {
  Component,
  ContentChildren,
  AfterContentInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent> =
    new QueryList();

  activeCss = '';
  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach((t) => {
      t.active = false;
    });
    tab.active = true;
    return false;
  }

  activateTab(tab: TabComponent) {
    if (!tab.active) {
      this.activeCss = ' hover:text-white text-white bg-indigo-400';
    } else {
      this.activeCss = ' hover:text-indigo-400';
    }
    return this.activeCss;
  }
}
