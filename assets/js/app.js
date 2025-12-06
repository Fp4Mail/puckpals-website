(function () {
  'use strict';

  function $(selector) { return document.querySelector(selector); }
  function $all(selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); }

  function applyBasicMeta(content) {
    if (content.siteTitle) {
      document.title = content.siteTitle;
      $('#site-logo-text').textContent = content.brand && content.brand.name ? content.brand.name : content.siteTitle;
      $('#footer-brand').textContent = content.brand && content.brand.name ? content.brand.name : content.siteTitle;
    }
    if (content.brand && content.brand.tagline && $('#site-logo-tagline')) {
      $('#site-logo-tagline').textContent = content.brand.tagline;
    }
    if (content.metaDescription) {
      var meta = document.querySelector('meta[name=\"description\"]');
      if (meta) meta.setAttribute('content', content.metaDescription);
    }
    var yearEl = $('#footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function applyHero(content) {
    if (!content.hero) return;
    if (content.hero.headline && $('#hero-heading')) {
      $('#hero-heading').innerHTML = content.hero.headline.replace('Puck Pals', '<span>Puck Pals</span>');
    }
    if (content.hero.subheadline && $('#hero-subheading')) {
      $('#hero-subheading').textContent = content.hero.subheadline;
    }

    function applyCta(nodeId, cta) {
      var el = $(nodeId);
      if (!el || !cta) return;
      if (cta.url) el.setAttribute('href', cta.url);
      if (cta.label) {
        var span = el.querySelector('span');
        if (span) span.textContent = cta.label;
      }
    }

    applyCta('#hero-primary-cta', content.hero.primaryCta);
    applyCta('#hero-secondary-cta', content.hero.secondaryCta);
    applyCta('#hero-tertiary-cta', content.hero.tertiaryCta);
  }

  function applyEpisodes(content) {
    if (!content.episodesSection) return;
    var section = content.episodesSection;
    var titleEl = $('#episodes-title');
    if (titleEl && section.title) titleEl.textContent = section.title;

    var grid = $('#episodes-grid');
    if (!grid || !section.episodes || !section.episodes.length) return;

    grid.innerHTML = '';
    section.episodes.forEach(function (ep, index) {
      var card = document.createElement('article');
      card.className = 'episode-card floating';
      card.innerHTML =
        '<div class=\"episode-number\">' + (ep.number || ('EPISODE ' + (index + 1).toString().padStart(2, '0'))) + '</div>' +
        '<h3 class=\"episode-title\">' + (ep.title || 'Untitled episode') + '</h3>' +
        '<p class=\"episode-description\">' + (ep.description || '') + '</p>' +
        '<a class=\"play-button\" href=\"' + (ep.url || '#') + '\">' +
          '<i class=\"fas fa-play\"></i>' +
          '<span>Play Episode</span>' +
        '</a>';

      grid.appendChild(card);
    });

    $all('.play-button').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        if (btn.getAttribute('href') === '#') {
          e.preventDefault();
          var original = btn.innerHTML;
          btn.innerHTML = '<i class=\"fas fa-pause\"></i><span> Playing…</span>';
          setTimeout(function () { btn.innerHTML = original; }, 1800);
        }
      });
    });
  }

  function applyAbout(content) {
    if (!content.aboutSection) return;
    var section = content.aboutSection;
    if (section.title && $('#about-title')) {
      $('#about-title').textContent = section.title;
    }
    var container = $('#about-copy');
    if (!container) return;
    container.innerHTML = '';
    (section.paragraphs || []).forEach(function (text) {
      var p = document.createElement('p');
      p.textContent = text;
      container.appendChild(p);
    });
  }

  function applyContact(content) {
    if (!content.contactSection) return;
    var section = content.contactSection;
    if (section.title && $('#contact-title')) $('#contact-title').textContent = section.title;
    if (section.blurb && $('#contact-blurb')) $('#contact-blurb').textContent = section.blurb;

    var emailEl = $('#contact-email');
    if (emailEl && section.email) {
      emailEl.setAttribute('href', 'mailto:' + section.email);
      var span = emailEl.querySelector('span');
      if (span) span.textContent = section.email;
    }

    var phoneEl = $('#contact-phone');
    if (phoneEl && section.phone) {
      phoneEl.setAttribute('href', 'tel:' + section.phone.replace(/[^+\d]/g, ''));
      var pspan = phoneEl.querySelector('span');
      if (pspan) pspan.textContent = section.phone;
    }
  }

  function applySocial(content) {
    if (!content.social) return;
    var s = content.social;

    function setHref(id, url) {
      if (!url) return;
      var el = $(id);
      if (el) el.setAttribute('href', url);
    }

    setHref('#nav-youtube', s.youtube);
    setHref('#nav-spotify', s.spotify);

    setHref('#footer-facebook', s.facebook);
    setHref('#footer-youtube', s.youtube);
    setHref('#footer-spotify', s.spotify);
  }

  function startBackgroundCarousel(content) {
    if (!content.backgrounds || !content.backgrounds.images || !content.backgrounds.images.length) return;

    var urls = content.backgrounds.images;
    var intervalMs = content.backgrounds.intervalMs || 8000;
    var bgNodes = $all('.bg-image');
    if (!bgNodes.length) return;

    bgNodes.forEach(function (node, index) {
      var url = urls[index % urls.length];
      node.style.backgroundImage = \"url('\" + url + \"')\";
    });

    var indicator = $('#rotationIndicator');
    var current = 0;

    function setActive(index) {
      bgNodes.forEach(function (node, i) {
        if (i === index) node.classList.add('active');
        else node.classList.remove('active');
      });
      if (indicator) {
        indicator.classList.remove('active');
        void indicator.offsetWidth;
        indicator.classList.add('active');
      }
    }

    setActive(0);
    setInterval(function () {
      current = (current + 1) % bgNodes.length;
      setActive(current);
    }, intervalMs);
  }

  function init(content) {
    applyBasicMeta(content);
    applyHero(content);
    applyEpisodes(content);
    applyAbout(content);
    applyContact(content);
    applySocial(content);
    startBackgroundCarousel(content);
  }

  document.addEventListener('DOMContentLoaded', function () {
    fetch('content.json?v=' + Date.now())
      .then(function (res) { return res.json(); })
      .then(function (data) { init(data); })
      .catch(function (err) {
        console.error('Error loading content.json', err);
      });
  });
})();
