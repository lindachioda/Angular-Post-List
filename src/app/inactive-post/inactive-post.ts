import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostServicies } from '../servicies/post-servicies';
import { Post } from '../post/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inactive-post',
  imports: [CommonModule],
  templateUrl: './inactive-post.html',
  styleUrl: './inactive-post.scss',
})
export class InactivePost implements OnInit {
  posts: Post[] = [] 

  constructor(private postServices: PostServicies, private cdr:ChangeDetectorRef){}

  async ngOnInit():Promise<any> {


    let allPosts = await this.postServices.getPosts()
    this.posts = allPosts.filter(post=> !post.active)

     console.log(this.posts)

     this.cdr.detectChanges()
  }


}
