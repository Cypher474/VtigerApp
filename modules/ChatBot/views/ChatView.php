<?php

class ChatBot_ChatView_View extends Vtiger_Index_View {

    
    public function process(Vtiger_Request $request) {
        $viewer = $this->getViewer($request);
        $viewer->view('ChatView.tpl', $request->getModule());
    }
}
?>
