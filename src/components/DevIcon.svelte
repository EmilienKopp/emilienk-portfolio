<script>
import FlipCard from "./FlipCard.svelte";
export let tool;

const toolInfo = [
    {id: 'dotnet', label: ".NET Core", link: "https://dotnet.microsoft.com/en-us/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"},
    {id: 'mysql', label: "MySQL", link: "https://www.mysql.com/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"},
    {id: 'php', label: "PHP", link: "https://www.php.net/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"},
    {id: 'laravel', label: "Laravel", link: "https://laravel.com/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg"},
    {id: 'svelte', label: "Svelte", link: "https://svelte.dev/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"},
    {id: 'tailwind', label: "Tailwind", link: "https://tailwindcss.com/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
    {id: 'angular', label: "Angular", link: "https://angular.io/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},
    {id: 'aws', label: "AWS", link: "https://aws.amazon.com/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
    {id: 'bootstrap', label: "Bootstrap", link: "https://getbootstrap.com/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"},
    {id: 'css3', label: "CSS3", link: "https://www.w3schools.com/css/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"},
    {id: 'html5', label: "HTML5", link: "https://www.w3schools.com/html/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"},
    {id: 'javascript', label: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {id: 'visualstudio', label: "Visual Studio", link: "https://visualstudio.microsoft.com/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"},
    {id: 'git', label: "Git", link: "https://git-scm.com/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"},
    {id: 'phpstorm', label: "PHPStorm", link: "https://www.jetbrains.com/phpstorm/", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg"},
    {id: 'illustrator', label: "Adobe Illustrator", link: "https://www.adobe.com/products/illustrator.html", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"},
]

    let toolName = toolInfo.find(t => t.id === tool).label;
    let href = toolInfo.find(t => t.id === tool).link;
    let src = toolInfo.find(t => t.id === tool).src;

</script>

<a {href}>
    <div>
        <img {src} alt={toolName} width=40 height=40/>
    </div>
</a>