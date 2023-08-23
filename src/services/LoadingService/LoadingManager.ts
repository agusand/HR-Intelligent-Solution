import { EventEmitter } from "events";
import { LoadingInstance, Screen, ScreensMap } from "./types";

export default class LoadingManager {
  loadingList: LoadingInstance[];
  eventEmmiter: EventEmitter;
  screensMap: ScreensMap;

  constructor() {
    this.loadingList = [];
    this.screensMap = {
      groups: false,
      general: false,
      subGeneral: false,
      total: false,
      templates: false,
      storages: false,
      constraints: false,
      history: false,
    };
    this.eventEmmiter = new EventEmitter();
  }

  emitChange() {
    this.eventEmmiter.emit("change", this.screensMap);
  }

  onChange(callback: (e: ScreensMap) => void) {
    this.eventEmmiter.on("change", callback);
  }

  addLoadingScreen(screen: Screen) {
    const lastId = this.loadingList.length && this.loadingList[this.loadingList.length - 1].id;
    const newInstance = { id: lastId + 1, screen };

    this.loadingList.push(newInstance);
    this.mapUpdate();

    return lastId + 1;
  }

  removeLoadingScreen(id: number) {
    const newList = this.loadingList.filter((instance) => instance.id !== id);

    this.loadingList = newList;
    this.mapUpdate();
  }

  mapUpdate() {
    const mapKeys = Object.keys(this.screensMap || {}) as Screen[];

    mapKeys.forEach((screen: Screen) => {
      this.screensMap[screen] = this.loadingList.some((instance) => instance.screen == screen);
    });

    this.emitChange();
  }
}
