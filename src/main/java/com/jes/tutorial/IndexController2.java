package com.jes.tutorial;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

/**
 * Created by jes on 2016. 12. 1..
 */
@Controller
@RequestMapping("/v2")
public class IndexController2 {
    @RequestMapping("/test")
    @ResponseBody
    public String tst() {
        return "test";
    }
}
