/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/image-tile.js';

class AppGallery extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          // display: block;
          // padding: 10px;
        }
        .image-tiles{
          display:flex;
          flex-direction:row;
        }
      </style>

      <div class="card">
        <h1>Gallery</h1>
        <div class="image-tiles">
          <dom-repeat items={{images}}
                      as="src">
            <template>
              <image-tile source={{src}}></image-tile>
            </template>
          </dom-repeat>
        </div>
      </div>
    `;
  }

  static get properties() {
    return{
      images: {
        type: Array,
        value: () => {
          return [
            '../images/001.png',
            '../images/002.png',
            '../images/003.png',
            '../images/004.png',
          ]
        }
      }
    }
  }

}

window.customElements.define('app-gallery', AppGallery);
