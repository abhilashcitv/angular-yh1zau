import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div kendoTooltip style="text-align: center; padding-top: 10px;">
          <button class="k-button k-primary" title="Saves the current document">
              Save
          </button>

          <button class="k-button" title="Discards all changes">
              Cancel
          </button>
      </div>
    `
})
export class AppComponent {}
