// Interface constructora de Posts
interface Builder {
    makeTitle(title: string): void;
    makeSubtitle(subtitle: string): void;
    makeParagraph(paragraph: string): void;
    makeImage(image: string): void;
}

// Constructor concreto de Posts
class PostBuilder implements Builder {
    private posts: Posts;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.posts = new Posts();
    }

    public makeTitle(title: string): void {
        this.posts.title = title;
    }

    public makeSubtitle(subtitle: string): void {
        this.posts.subtitle = subtitle;
    }

    public makeParagraph(paragraph: string): void {
        this.posts.paragraph = paragraph;
    }

    public makeImage(image: string): void {
        this.posts.image = image;
    }

    public getPosts(): Posts {
        const result = this.posts;
        this.reset();
        return result;
    }
}

// Clase que construye los Posts
class Posts {
    public title: string;
    public subtitle: string;
    public paragraph: string;
    public image: string;

    public showPost(): void {
        let post = this.title ? `Title: ${this.title} \n` : '';
        post += this.subtitle ? `Subtitle: ${this.subtitle} \n` : '';
        post += this.paragraph ? `Paragraph: ${this.paragraph} \n` : '';
        post += this.image ? `Image: ${this.image} \n` : '';
        console.log(post);
    }
}

// Director
class DirectorPosts {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    // recetas de construccion
    public postMinimal(): void {
        this.builder.makeTitle("Titulo minimo");
        this.builder.makeParagraph("Parrafo minimo");
    }

    public postMedium(): void {
        this.builder.makeTitle("Titulo medio");
        this.builder.makeSubtitle("Subtitulo medio");
        this.builder.makeParagraph("Parrafo medio");
    }

    public postFull(): void {
        this.builder.makeTitle("Titulo completo");
        this.builder.makeSubtitle("Subtitulo completo");
        this.builder.makeParagraph("Parrafo completo");
        this.builder.makeImage("Imagen completa");
    }
}

// Cliente
function clienteBuilder1(){
    const postLessDirector = new PostBuilder();
    postLessDirector.makeTitle("Titulo sin Director");
    postLessDirector.makeParagraph("Parrafo de prueba sin Director");
    postLessDirector.getPosts().showPost();
}

function clienteBuilder2(director: DirectorPosts){
    const builder = new PostBuilder();
    director.setBuilder(builder);

    director.postMinimal();
    builder.getPosts().showPost();

    director.postMedium();
    builder.getPosts().showPost();

    director.postFull();
    builder.getPosts().showPost();
}

// Ejecucion sin Director
clienteBuilder1();
// Ejecucion con Director
clienteBuilder2(new DirectorPosts());