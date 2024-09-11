<div class="container">
    <div class="text-center hd1">
        <br>
        Zaltech Automation Chatbot
        <br>
    </div>
    <mybot></mybot>
</div>

<div id="chatCont" class="chatCont">
    <div class="bot_profile">
        <img src="layouts/v7/modules/ChatBot/assets/img/bot2.svg" class="bot_p_img">
        <div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
    </div>
    <div id="result_div" class="resultDiv"></div>
    <div class="chatForm" id="chat-div">
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
        <input type="text" id="chat-input" autocomplete="off" placeholder="Try typing here" class="form-control bot-txt" />
        <button id="send-button" class="btn btn-primary">Send Message</button>  <!-- Added button -->
    </div>
</div>

<div class="profile_div">
    <div class="row">
        <div class="col-hgt">
            <img src="layouts/v7/modules/ChatBot/assets/img/bot2.svg" class="img-circle img-profile">
        </div>
        <div class="col-hgt">
            <div class="chat-txt">
                Chat with us now!
            </div>
        </div>
    </div>
</div>

<script src="layouts/v7/modules/ChatBot/ChatBot.js"></script>

