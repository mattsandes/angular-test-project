import { Component, signal } from '@angular/core';
import { IPostInterface } from '../../interfaces/IPostInterface';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  public contentArray = signal<IPostInterface[]>([
    {
      title: "Undead United: A Haven Beyond the Grave",
      text: "Donec tristique, neque in dapibus sagittis, quam felis feugiat lorem, ac aliquet augue nunc in enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec imperdiet semper nibh, vel volutpat lectus fringilla nec. Aliquam erat volutpat. Etiam eget libero varius, rutrum augue et, malesuada lorem. In convallis quam ante, et gravida dui vulputate non. Praesent a metus neque."
    },
    {
      title: "Rise and Gather: The Sanctuary of Shadows",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et eros ligula. Pellentesque dui risus, interdum vestibulum porttitor vel, vehicula et ante. Vivamus porttitor lacus sed orci vulputate auctor. Nullam a vestibulum orci. Proin sollicitudin nibh id nibh tristique, ut mollis erat pulvinar. Aenean feugiat condimentum condimentum. Donec non tempus odio. In id molestie orci, et ornare lorem. Etiam velit nunc, faucibus et velit ac, tincidunt malesuada diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur risus in massa iaculis ultrices eu consequat enim. Nulla facilisi. Fusce quis egestas neque. Quisque est sem, tincidunt nec imperdiet eget, iaculis nec justo. Suspendisse commodo lectus aliquam commodo ultricies. Vivamus elementum metus vel risus posuere aliquam."
    },
    {
      title: "Eternal Kinship: Where the Undead Belong",
      text: "Vestibulum odio nisi, mollis sit amet velit eget, pretium pharetra nulla. Nulla faucibus nisi magna, nec porttitor neque vehicula nec. Pellentesque imperdiet mi interdum dictum gravida. Ut laoreet consectetur quam sed molestie. Sed iaculis placerat nisl eu mollis. Aenean aliquam elementum accumsan. Nunc iaculis at arcu nec ullamcorper. Suspendisse fermentum mi sit amet ligula porttitor iaculis. Vivamus vestibulum justo eget libero efficitur, sit amet volutpat dui accumsan. Vestibulum elementum accumsan nibh, vel tincidunt nunc rutrum id. Duis vel nibh sem. Phasellus justo ipsum, viverra et maximus rutrum, scelerisque ac leo. Mauris in euismod sapien. In ullamcorper est vulputate turpis porttitor tempor. Etiam a egestas odio. "
    }
  ])
}
