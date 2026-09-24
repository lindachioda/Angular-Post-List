import { Injectable } from '@angular/core';
import { Post } from '../post/post';

@Injectable({
  providedIn: 'root',
})

export class PostServicies {
  
  posts:Post[] = []

  async getPosts(): Promise<Post[]> //fondamentale per TS
  {
    let res = await fetch(`/db.json`)
    return await res.json() as Post[] //as Post[] prende dal JSON array con la forma dell'interfaccia Post[]
  
  }
  
}
