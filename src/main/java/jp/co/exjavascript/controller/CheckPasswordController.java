package jp.co.exjavascript.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/checkpassword")
public class CheckPasswordController {
	
	@RequestMapping("")
	public String index() {
		return "input_password";
	}

	@ResponseBody
	@RequestMapping(value="/check",method = RequestMethod.POST)
	public Map<String,String> check(String password,String confirmationPassword){
		Map<String,String> map = new HashMap<>();
		
		String duplicateMessage =null;

		
		final int PASSWORD_LENGTH=8;
		//パスワードが8文字以上かどうかチェック
		if(password.length() <= PASSWORD_LENGTH) {
			duplicateMessage="パスワードは8文字以上で入力してください。";
		}else {
			duplicateMessage="パスワード入力OK";
		}
		
		map.put("duplicateMessage",duplicateMessage);
		
		
		String confDuplicateMessage =null;
		//確認用パスワードがパスワードと一致しているかチェック
		if(password.equals(confirmationPassword)) {
			confDuplicateMessage="確認用パスワード入力OK";
		}else {
			confDuplicateMessage="パスワードが一致していません";
		}

		map.put("confDuplicateMessage", confDuplicateMessage);
		
		System.out.println(password + ":" + confirmationPassword);
		return map;
	}
}
