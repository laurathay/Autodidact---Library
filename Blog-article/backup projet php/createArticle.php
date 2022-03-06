<form class="form" method="post">
    <h1 class="form-title">Gestion des articles</h1>
      <div class="grid">
        <div class="form-group">
          <input type="text" name="authorId" id="name" placeholder="Author Id ">
          <!-- <label for="authorId"> Author Id : <input name="authorId" type="text"></label>  -->
        </div>
        <div class="form-group">
          <input type="text" name="title" id="title" placeholder="Titre:">
          <!-- <label for="title"> Titre: <input name="title" type="text"></label>  -->
        </div>
        <div class="form-group">
          <input type="text" name="content" id="content" placeholder="Content">
          <!-- <label for="content"> Content : <input name="content" type="text"></label>  -->
        </div>
        <div class="form-group">
          <!-- <textarea name="message" id="message" placeholder="Your message goes here"></textarea> -->
          <input type="submit" value="Envoyer" />
        </div>
        <button type="submit" class="btn" value="Envoyer"><a class="submit" href="http://localhost:5555/">Votre mon article prendre son envol</a></button>
        <!-- <input type="submit" value="Envoyer" /> -->
      </div>
</form>


<!-- <?php
// show_error();
// show_success();
?> -->

<?php

