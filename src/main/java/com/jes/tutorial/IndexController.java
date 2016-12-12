package com.jes.tutorial;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

/**
 * Created by jes on 2016. 12. 1..
 */
@Controller
public class IndexController {
    @RequestMapping({"/index", "/"})
    public String indexPage() {
        return "index";
    }

    @RequestMapping("/jes")
    public String jes() {
        return "jes";
    }

    @RequestMapping("/xmltest")
    public String xmltest() {
        return "xmltest";
    }

    @RequestMapping("/urlbasedviewresolver")
    public String urlbasedviewresolver() {
        return "urlbasedviewresolver";
    }

    @RequestMapping("/beannameviewresolvertest")
    public String beannameviewresolvertest(Model model) {

        model.addAttribute("test", "test");
        return "jsonView";
    }

    @RequestMapping("/redirecttest")
    public RedirectView redirecttest() {
        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("/v2/test");
        return redirectView;
    }
}
