import React, { useState } from 'react';
import './BottomContainer.css';
import refreshIcon from '../assets/images/marble-recycle-logo-2.png'; 

const quotes = [
  "Nature must be followed. - Zeno of Citium",
  "No loss should be more regrettable to us than losing our time, for it's irretrievable. - Zeno of Citium",
  "He has the most who is content with the least. - Diogenes",
  "The mind is not a vessel to be filled but a fire to be kindled. - Plutarch",
  "Man is most nearly himself when he achieves the seriousness of a child at play. - Heraclitus",
  "A man's characters is his fate. - Heraclitus",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The hardest thing to learn in life is which bridge to cross and which to burn. - Bertrand Russell",
  "In the depth of winter, I finally learned that within me there lay an invincible summer. - Albert Camus",
  "The whole future lies in uncertainty, live immediately. - Seneca",
  "We suffer more often in imagination than in reality. - Seneca",
  "He who fears death will never do anything worth of a man who is alive. - Seneca",
  "The best revenge is not to be like your enemy. - Marcus Aurelius",
  "It is not the man who has too little, but the man who craves more, that is poor. - Seneca",
  "You have power over your mind – not outside events. Realize this, and you will find strength. - Marcus Aurelius",
  "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
  "Dwell on the beauty of life. Watch the stars, and see yourself running with them. - Marcus Aurelius",
  "If it is not right, do not do it; if it is not true, do not say it. - Marcus Aurelius",
  "Waste no more time arguing what a good man should be. Be one. - Marcus Aurelius",
  "How long are you going to wait before you demand the best for yourself? - Epictetus",
  "Don’t explain your philosophy. Embody it. - Epictetus",
  "Man is not worried by real problems so much as by his imagined anxieties about real problems. - Epictetus",
  "Wealth consists not in having great possessions, but in having few wants. - Epictetus",
  "First say to yourself what you would be; and then do what you have to do. - Epictetus",
  "Circumstances don’t make the man, they only reveal him to himself. - Epictetus",
  "The greater the difficulty, the more glory in surmounting it. - Epictetus",
  "Pain is neither intolerable nor everlasting if you bear in mind that it has its limits, and if you add nothing to it in imagination. - Marcus Aurelius",
  "Suffering becomes beautiful when anyone bears great calamities with cheerfulness, not through insensibility but through greatness of mind. - Seneca",
  "The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do. - Marcus Aurelius",
  "When someone is properly grounded in life, they shouldn't have to look outside themselves for approval. - Epictetus",
  "Very little is needed to make a happy life; it is all within yourself, in your way of thinking. - Marcus Aurelius",
  "Accustom yourself to attend carefully to what is said by another, and as much as it is possible, try to inhabit the speaker's mind. - Marcus Aurelius",
  "Whenever you are about to find fault with someone, ask yourself the following question: what fault of mine most nearly resembles the one I am about to criticize? - Marcus Aurelius",
  "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will. - Epictetus",
  "But if a thing is humanly possible, consider it to be within your reach. - Marcus Aurelius",
  "It is the power of the mind to be unconquerable. - Seneca",
  "Luck is what happens when preparation meets opportunity. - Seneca",
  "To bear trials with a calm mind robs misfortune of its strength and burden. - Seneca",
  "Throw me to the wolves and I will return leading the pack. - Seneca",
  "Begin at once to live, and count each separate day as a separate life. - Seneca",
  "If you really want to escape the things that harass you, what you're needing is not to be in a different place but to be a different person. - Seneca",
  "The soul becomes dyed with the color of its thoughts. - Marcus Aurelius",
  "Confine yourself to the present. - Marcus Aurelius",
  "The best answer to anger is silence. - Marcus Aurelius",
  "He suffers more than necessary, who suffers before it is necessary. - Seneca",
  "If it is not true, don't say it. If it is not right, don't do it. - Marcus Aurelius",
  "What we do now echoes in eternity. - Marcus Aurelius",
  "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. - Marcus Aurelius",
];

const BottomContainer = () => {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  const currentYear = new Date().getFullYear();

  const refreshQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const [quoteText, author] = quote.split(" - ");

  return (
    <div className="bottom-container text-center gradient-background">
      <div className="quote-container">
        <p className="quote-text">{quoteText}</p>
        <p className="quote-author">
          {author}
          <button className="refresh-button" onClick={refreshQuote}>
            <img src={refreshIcon} alt="Refresh" className="refresh-icon" />
          </button>
        </p>
      </div>
      <p className="copyright">©{currentYear} Joseph Mather</p>
    </div>
  );
};

export default BottomContainer;
