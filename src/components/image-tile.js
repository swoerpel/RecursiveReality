import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
/**
 * `my-article`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ImageTile extends PolymerElement {
  // called when tag is placed in template
  static get template() {
    return html`
      <style>
        :host {
          
        }
        .tile {
          background-color:#fff;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2);
          text-align: center;
          padding: 1%;
          margin: 1%;
        }
        .img{
            width:200px;
        }
      </style>

      <div class="tile">
        <img class="img" src="[[source]]"></img>
      </div>
    `;
  }
  static get properties() {
    return {
        source: {
            type: String,
            value: ''
        }
    };
  }
}

// webcomponent binding
window.customElements.define('image-tile', ImageTile);
