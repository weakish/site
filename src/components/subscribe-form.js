import React from 'react';
import SubscribeFormStyles from './subscribe-form.module.css';

const SubscribeForm = () => (
  <form
    action="https://jishuq.us17.list-manage.com/subscribe/post?u=3c5403dbe4d67ff90fa5ff1ec&amp;id=248ba7cad4"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className={SubscribeFormStyles.VerticalSubscribeForm}
    target="_blank"
  >
    <h2>文章订阅</h2>
    <input
      type="email"
      name="EMAIL"
      className="required email"
      id="mce-EMAIL"
      placeholder="您的邮箱地址"
    />
    <p>我们绝不会分享您的电子邮件地址。您可以随时退订。</p>
    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
      <input
        type="text"
        name="b_3c5403dbe4d67ff90fa5ff1ec_248ba7cad4"
        tabIndex="-1"
      />
    </div>
    <input
      type="submit"
      value="提交订阅"
      name="subscribe"
      id="mc-embedded-subscribe"
      className="button"
    />
  </form>
);

export default SubscribeForm;
