import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const swal: any;

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.css']
})
export class FormWizardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });

      function setButtonWavesEffect(event) {
          $(event.currentTarget).find('[role="menu"] li a').removeClass('waves-effect');
          $(event.currentTarget).find('[role="menu"] li:not(.disabled) a').addClass('waves-effect');
      }

      // Horizontal form basic
      $('#wizard_horizontal').steps({
          headerTag: 'h2',
          bodyTag: 'section',
          transitionEffect: 'slideLeft',
          onInit: function (event, currentIndex) {
              setButtonWavesEffect(event);
          },
          onStepChanged: function (event, currentIndex, priorIndex) {
              setButtonWavesEffect(event);
          }
      });

      // Vertical form basic
      $('#wizard_vertical').steps({
          headerTag: 'h2',
          bodyTag: 'section',
          transitionEffect: 'slideLeft',
          stepsOrientation: 'vertical',
          onInit: function (event, currentIndex) {
              setButtonWavesEffect(event);
          },
          onStepChanged: function (event, currentIndex, priorIndex) {
              setButtonWavesEffect(event);
          }
      });

      // Advanced form with validation
      const form = $('#wizard_with_validation').show();
      form.steps({
          headerTag: 'h3',
          bodyTag: 'fieldset',
          transitionEffect: 'slideLeft',
          onInit: function (event, currentIndex) {
              // $.AdminsQuare.input.activate();

              // Set tab width
              const $tab = $(event.currentTarget).find('ul[role="tablist"] li');
              const tabCount = $tab.length;
              $tab.css('width', (100 / tabCount) + '%');

              // set button waves effect
              setButtonWavesEffect(event);
          },
          onStepChanging: function (event, currentIndex, newIndex) {
              if (currentIndex > newIndex) { return true; }

              if (currentIndex < newIndex) {
                  form.find('.body:eq(' + newIndex + ') label.error').remove();
                  form.find('.body:eq(' + newIndex + ') .error').removeClass('error');
              }

              form.validate().settings.ignore = ':disabled,:hidden';
              return form.valid();
          },
          onStepChanged: function (event, currentIndex, priorIndex) {
              setButtonWavesEffect(event);
          },
          onFinishing: function (event, currentIndex) {
              form.validate().settings.ignore = ':disabled';
              return form.valid();
          },
          /*onFinished: function (event, currentIndex) {
              swal('Good job!', 'Submitted!', 'success');
          }*/
      });

      form.validate({
          highlight: function (input) {
              $(input).parents('.form-line').addClass('error');
          },
          unhighlight: function (input) {
              $(input).parents('.form-line').removeClass('error');
          },
          errorPlacement: function (error, element) {
              $(element).parents('.form-group').append(error);
          },
          rules: {
              'confirm': {
                  equalTo: '#password'
              }
          }
      });
  }

}
