import { FC } from "react";
import ArticleHeader from "../../Library/article-header/ArticleHeader";
import { ArticleParagraphs } from "../../Library/paragraphs/Paragraphs";

type ArticleProps = {
  title: string;
  subtitle: string;
  author: string;
  date: string;
};

const Article: FC<ArticleProps> = ({ title, subtitle, author, date }) => {
  return (
    <article className="article">
      <ArticleHeader
        title={title}
        subtitle={subtitle}
        author={author}
        date={date}
      />
      <ArticleParagraphs />
    </article>
  );
};

export default Article;
