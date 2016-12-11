package com.jes.tutorial;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by jes on 2016. 12. 1..
 */
@Controller
public class IndexController {
    @RequestMapping({"/index", "/"})
    public ModelAndView indexPage() {
        ModelAndView mav = new ModelAndView("/WEB-INF/views/index.jsp");
        return mav;
    }

    @RequestMapping({"/index2"})
    public String index2() {
        return "/WEB-INF/Index2.html";
    }
}
