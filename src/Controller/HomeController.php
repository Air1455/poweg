<?php

namespace App\Controller;

use Symfony\Bridge\Twig\Attribute\Template;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Template("default/index.html.twig")]
    #[Route("/{reactRouting}", name: "home", requirements: ["reactRouting" => "^(?!api).+"], defaults: ["reactRouting" => null])]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }
}
