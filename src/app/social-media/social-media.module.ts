import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import {PostsService} from "./services/posts.service";
import { PostListComponent } from './components/post-list/post-list.component';
import {PostsResolver} from "./resolver/post.resolver";


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
