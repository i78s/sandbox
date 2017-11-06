FROM php:7-fpm
RUN docker-php-ext-install pdo_mysql
COPY php-fpm.conf /usr/local/etc/php-fpm.d/php-fpm.conf

RUN curl -sSL https://getcomposer.org/installer | php \
   && mv composer.phar /usr/local/bin/composer

RUN usermod -u 1000 www-data
WORKDIR /var/www/public
CMD ["php-fpm"]