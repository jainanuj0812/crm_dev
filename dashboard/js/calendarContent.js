            $(function() {
                var pop_title = '', pop_content = '';
                $(document).popover({
                    delay: { show: 100, hide: 200 },
                    html: true,
                    trigger: 'hover',
                    selector: 'div.fc-content',
                    placement: 'auto',
                    content: function() {
                                return pop_content;
                             },
                    title: function() {
                                return pop_title;
                           },
                    container: 'body'
                });
                var transEndEventNames = {
                        'WebkitTransition' : 'webkitTransitionEnd',
                        'MozTransition' : 'transitionend',
                        'OTransition' : 'oTransitionEnd',
                        'msTransition' : 'MSTransitionEnd',
                        'transition' : 'transitionend'
                    },
                    transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ],
                    $wrapper = $('#custom-inner'),
                    $calendar = $('#calendar'),
                    cal = $calendar.calendario({
                        onDayMouseenter : function( $el, data, dateProperties ) {
                            if( data.content.length > 0 ) {
                                pop_title = dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year;
                                pop_content = data.content.join('');
                                cal.feed(logFeed);
                            }
                        },
                        caldata : codropsEvents,
                        events: 'mouseenter',
                        displayWeekAbbr : true,
                        fillEmpty: false
                    }),
                    $month = $('#custom-month').html(cal.getMonthName()),
                    $year = $('#custom-year').html(cal.getYear());

                $('#custom-next').on('click', function() {
                    cal.gotoNextMonth( updateMonthYear );
                } );
                $('#custom-prev').on('click', function() {
                    cal.gotoPreviousMonth(updateMonthYear);
                } );

                function updateMonthYear() {                
                    $month.html(cal.getMonthName());
                    $year.html(cal.getYear());
                }

                function logFeed(data) {              
                    console.log(data);
                }
            });